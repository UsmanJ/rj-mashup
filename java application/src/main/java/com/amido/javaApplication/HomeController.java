package com.amido.javaApplication;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

//@Controller
@RestController
public class HomeController {
    @RequestMapping(value = "/date-time")
    public TimeModel index() {
        System.out.print("This is my console.log");

        RestTemplate restTemplate = new RestTemplate();

        String time = restTemplate.getForObject("http://www.timeapi.org/utc/now", String.class);

        System.out.println(time);

        return new TimeModel(time);
    }
}