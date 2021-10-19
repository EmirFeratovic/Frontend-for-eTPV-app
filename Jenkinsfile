pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                echo "Instalacija paketa"
                sh "npm install"
            }
        }

        stage('Test') {
            steps {
                echo "Testiram"
            }
        }

        stage('Create Docker Image') {
            steps {
                echo "Create Docker Image"
                sh "docker build -t tpv-frontend ."
            }
        }

        stage('Run Docker Image') {
            steps {
                echo "Run Docker Image"
                sh "docker run --rm -p 3030:3030 --name frontend tpv-frontend"
            }
        }
    }
}