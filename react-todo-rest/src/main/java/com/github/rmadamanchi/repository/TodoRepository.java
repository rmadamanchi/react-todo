package com.github.rmadamanchi.repository;

import com.github.rmadamanchi.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface TodoRepository extends JpaRepository<Todo, Integer> {
}
