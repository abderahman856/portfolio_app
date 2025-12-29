terraform {
  backend "s3" {
    bucket = "baashe-terraform-state-unique"
    key    = "state/terraform.tfstate"
    region = "us-east-1"
  }
}

module "networking" {
  source       = "./modules/networking"
  project_name = var.project_name
}

module "ecr" {
  source       = "./modules/ecr"
  project_name = var.project_name
}

module "alb" {
  source       = "./modules/alb"
  project_name = var.project_name
  vpc_id       = module.networking.vpc_id
  subnets      = module.networking.public_subnets
}

module "ecs" {
  source                = "./modules/ecs"
  project_name          = var.project_name
  container_image       = var.container_image # Passes the image from GitHub to ECS
  vpc_id                = module.networking.vpc_id
  subnets               = module.networking.public_subnets
  ecr_repository_url    = module.ecr.repository_url
  alb_target_group_arn  = module.alb.target_group_arn
  alb_security_group_id = module.alb.alb_security_group_id
}

output "website_url" {
  value = "http://${module.alb.alb_dns_name}"
}