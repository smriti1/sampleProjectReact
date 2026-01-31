pipeline {
  agent any

  tools {
    nodejs 'node20'
  }

  stages {

    stage('Verify Node Version') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
