pipeline {
  agent any
  stages {
    stage('download from git') {
      steps {
        git(url: 'https://github.com/kaiihudson/kaiiculadora.git', branch: 'master', credentialsId: '1')
      }
    }
    stage('run npm install') {
      steps {
        sh 'npm install'
      }
    }
    stage('test npm') {
      steps {
        sh 'npm test'
      }
    }
  }
  environment {
    node = 'node6'
  }
}