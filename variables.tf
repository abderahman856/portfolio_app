variable "aws_region" {
  default = "us-east-1"
}

variable "project_name" {
  default = "portfolio-app"
}

variable "container_image" {
  description = "The Docker image tag to deploy"
  type        = string
  default     = "latest"
}