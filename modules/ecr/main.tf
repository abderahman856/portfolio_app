resource "aws_ecr_repository" "repo" {
  name         = "${var.project_name}-repo"
  force_delete = true
}