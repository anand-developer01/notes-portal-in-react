const isHighlighted = 'java-practice'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'java-practice'
const Links4 = 'vue3-projects'

const DevOpsData = {
    DevOpsNotes: [
        {
            id: 1,
            section: "Git & Version Control",
            title: "Git",
            note: [
                {
                    text1: `You should know:

Branching strategies (feature, develop, release, main)
Merge vs Rebase
Resolving conflicts
Cherry-pick
Stash
Pull Requests
GitHub Actions basics`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Linux (Must Know)",
            title: "class",
            note: [
                {
                    text1: `ls
cd
pwd
grep
find
tail -f app.log
ps -ef
top
chmod
chown
systemctl
scp
ssh`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Maven/Gradle",
            title: "class",
            note: [
                {
                    text1: `For Spring Boot:

mvn clean install
mvn test
mvn spring-boot:run

You should understand:

Dependencies
Plugins
Build lifecycle
Profiles`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Docker (Must Master)",
            title: "class",
            note: [
                {
                    text1: `Spring Boot Dockerfile

FROM eclipse-temurin:21

COPY target/app.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]

Build:

docker build -t my-app .

Run:

docker run -p 8080:8080 my-app

You should also know:

Docker Compose
Container networking
Volumes
Environment variables`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Jenkins CI/CD (Good to Know)",
            title: "class",
            note: [
                {
                    text1: `Basic pipeline knowledge is enough:

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "AWS",
            title: "class",
            note: [
                {
                    text1: `Learn:

Amazon Web Services EC2
S3
RDS
IAM
Security Groups
Route 53
Elastic Beanstalk (optional)

You should be able to:

Launch a Linux server
Deploy Spring Boot applications
Configure a database
Upload files to S3`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Kubernetes",
            title: "class",
            note: [
                {
                    text1: `Just understand:

Pods
Deployments
Services
ConfigMaps
Secrets

Example:

kubectl get pods
kubectl get services
kubectl logs app-pod`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },

    ]
}




