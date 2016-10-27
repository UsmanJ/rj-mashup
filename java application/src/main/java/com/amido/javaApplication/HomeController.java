package com.amido.javaApplication;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

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

    @RequestMapping(value = "/tube-service")
    public List<TflModel> getTubeStatus() {
        System.out.print("This is the tube status");

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<List<TflModel>> tubeStatus = restTemplate.exchange("https://api.tfl.gov.uk/Mode/ActiveServiceTypes?app_id=&app_key=", HttpMethod.GET, null, new ParameterizedTypeReference<List<TflModel>>() {});

        List<String> myList = new ArrayList();

        myList.add("John");

        String o = myList.get(0);


        System.out.println(tubeStatus);

        List<TflModel> body = tubeStatus.getBody();

        System.out.println(body);

        return body;
    }

    @RequestMapping(value = "/random-user")
    public Object getRandomUser() {
        System.out.println("This is the random user api call");

        RestTemplate restTemplate = new RestTemplate();

        Object randomUser = restTemplate.getForObject("https://randomuser.me/api/", Object.class);

        System.out.println(randomUser);

        return randomUser;
    }

    @RequestMapping(value = "/knownUser")
    public Object getKnownUser() {
        System.out.println("This is the knownUser api call");

        RestTemplate restTemplate = new RestTemplate();

        Object knownUser = restTemplate.getForObject("https://randomuser.me/api/", Object.class);

        System.out.println(knownUser);

        return knownUser;
    }}