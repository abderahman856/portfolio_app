# 🚀 Production Portfolio — DevOps Project

This project is a **production-ready personal portfolio application** deployed on AWS using modern DevOps practices.

It demonstrates the complete journey from **local development** to **fully automated cloud deployment** using Docker, AWS ECS Fargate, Terraform, and GitHub Actions.

---

## 🔍 Overview

- Frontend: React (Vite) + TypeScript + Tailwind CSS
- Containerization: Docker (multi-stage build)
- Cloud Provider: AWS
- Compute: ECS Fargate
- Load Balancing: Application Load Balancer (ALB)
- Security: HTTPS via ACM
- Infrastructure as Code: Terraform
- CI/CD: GitHub Actions (OIDC, no static AWS keys)
- Domain: Route 53

Live URL:  
👉 http://portfolio-app-alb-357217689.us-east-1.elb.amazonaws.com/

---


## 🏗 Architecture Diagram

```mermaid
graph TD
    User((User)) -->|HTTPS| ALB[Application Load Balancer]
    ALB -->|Forward| ECS[ECS Fargate Service]
    ECS -->|Runs| Docker[Dockerized React App]
    
    GitHub[GitHub Actions] -->|Build & Push| ECR[Amazon ECR]
    GitHub -->|Terraform Apply| AWS[AWS Cloud Resources]
    ECR -->|Pull Image| ECS
