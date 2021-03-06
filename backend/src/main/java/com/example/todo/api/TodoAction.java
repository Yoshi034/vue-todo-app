package com.example.todo.api;

import com.example.todo.application.TodoService;
import com.example.todo.domain.*;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.core.validation.ee.ValidatorUtil;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@SystemRepositoryComponent
@Path("/todos/{todoId}")
public class TodoAction {

    private final TodoService todoService;

    public TodoAction(TodoService todoService) {
        this.todoService = todoService;
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public TodoResponse put(HttpRequest request, ExecutionContext context, PutRequest requestBody) {
        ValidatorUtil.validate(requestBody);

        UserId userId = new UserId("1001");
        TodoId todoId = new TodoId(Long.valueOf(request.getParam("todoId")[0]));
        TodoStatus status = requestBody.completed ? TodoStatus.COMPLETED : TodoStatus.INCOMPLETE;

        Todo todo = todoService.updateStatus(userId, todoId, status);

        return new TodoResponse(todo.id(), todo.text(), todo.status());
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public TodoResponse delete(HttpRequest request, ExecutionContext context) {
        TodoId todoId = new TodoId(Long.valueOf(request.getParam("todoId")[0]));
        Todo todo = todoService.deleteTodo(todoId);

        return new TodoResponse(todo.id(), todo.text(), todo.status());
    }

    public static class PutRequest {
        @NotNull
        public Boolean completed;
    }

    public static class TodoResponse {

        public final Long id;

        public final String text;

        public final Boolean completed;

        public TodoResponse(TodoId id, TodoText text, TodoStatus status) {
            this.id = id.value();
            this.text = text.value();
            this.completed = status == TodoStatus.COMPLETED;
        }
    }
}