output "alb_security_group_id" {
  value = aws_security_group.alb_sg.id
}

output "target_group_arn" {
  value = aws_lb_target_group.tg.arn
}

# This is the important one for CloudFront!
output "alb_dns_name" {
  description = "The DNS name of the load balancer"
  value       = aws_lb.portfolio_alb.dns_name
}