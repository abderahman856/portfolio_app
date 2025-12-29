variable "project_name" {
  description = "The name of the project"
  type        = string
  default     = "portfolio-app"
}

variable "container_image" {
  description = "The Docker image tag sent from GitHub Actions"
  type        = string
  default     = "latest"
}