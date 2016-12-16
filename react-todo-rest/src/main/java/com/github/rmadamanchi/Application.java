package com.github.rmadamanchi;

import com.github.rmadamanchi.model.Todo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class Application {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }


    @Configuration
    public class SpringDataRestCustomization extends RepositoryRestConfigurerAdapter {

        @Override
        public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

            config.exposeIdsFor(Todo.class);
        }
    }
}
