terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {}

resource "docker_image" "nodejs_graphql_api_image" {
  name         = "nodejs_graphql_api_image:latest"
  keep_locally = false
}

resource "docker_container" "nodejs_graphql_api" {
  image = docker_image.nodejs_graphql_api_image.image_id
  name  = "terraform_nodejs_graphql_api"
  ports {
    internal = 4000
    external = 4000
  }
}

