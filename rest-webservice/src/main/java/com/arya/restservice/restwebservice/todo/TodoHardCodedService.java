package com.arya.restservice.restwebservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int counter = 0;
		
	static {
		todos.add(new Todo(++counter, "Admin", "learn to dance", new Date(), false));
		todos.add(new Todo(++counter, "Admin", "learn about angular", new Date(), false));
		todos.add(new Todo(++counter, "Admin", "visit cali", new Date(), false));

	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
