pipeline {
  agent any

  tools {
    nodejs 'NodeJs20'
  }

  environment {
    IMAGE_NAME = "smritigupta05/testimage"
  }

  stages {

    stage('Build App') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh """
          docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .
          docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest
        """
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'Ganesh@sopra12345'
        )]) {
          sh """
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push ${IMAGE_NAME}:${BUILD_NUMBER}
            docker push ${IMAGE_NAME}:latest
          """
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh """
          kubectl set image deployment/myapp \
          myapp=${IMAGE_NAME}:${BUILD_NUMBER}

          kubectl rollout status deployment/myapp
        """
      }
    }
  }
}
