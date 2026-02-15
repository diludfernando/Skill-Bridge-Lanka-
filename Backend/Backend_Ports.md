## keep the port configuration like this in the backend part

- IT24102857-User-Registration-&-Profile-Managment = port 8081
- IT24104089-Skill-Assessment-System = port 8082
- IT24102429-Premium-IT-Career-Counselling-Sevice = port 8083
- IT23166806-Learning-Resource-Suggestions = port 8084
- IT24102315-Job-Market-Information-Database-and-Progress-Tracking = port 8085

## And make sure to create separate my sql Databases for the each part please
## make sure to make the sql databases are created outomatically 

## Use this code inside the Aplication properties
- spring.application.name=mcq-backend
- spring.datasource.url=jdbc:mysql://localhost:3306/mcq_db?createDatabaseIfNotExist=true
- spring.datasource.username= use the own name in the mysql that you used
- spring.datasource.password= use the password 
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.show-sql=true
- spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
- server.port=8080 # change this port number according to the each part


