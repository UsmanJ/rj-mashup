package com.amido.javaApplication;

import org.springframework.http.ResponseEntity;
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
    };

    @RequestMapping(value = "/tube-service")
    public String[] index() {
        System.out.print("This is the tube status");

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String[]> tubeStatus = restTemplate.getForEntity("https://api.tfl.gov.uk/Mode/ActiveServiceTypes?app_id=&app_key=", String[].class);

        System.out.println(tubeStatus);

        return new String[tubeStatus];
    };
}