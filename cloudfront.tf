resource "aws_cloudfront_distribution" "portfolio_dist" {
  origin {
    domain_name = module.alb.alb_dns_name
    origin_id   = "PortfolioALB"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only" # ALB is currently just http
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled = true

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "PortfolioALB"

    viewer_protocol_policy = "redirect-to-https" # This forces phones to use HTTPS!
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true # This gives you the free https:// link!
  }
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.portfolio_dist.domain_name
}
