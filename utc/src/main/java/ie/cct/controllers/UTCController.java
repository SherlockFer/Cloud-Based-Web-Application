package ie.cct.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.TimeZone;
import java.util.Date;

@RestController
public class UTCController{

    @GetMapping("/utc/{timestamp}")// more than 2 @GetMapping("/utc/{timestamp}/{var2}")
    public UTCDate utc(@PathVariable("timestamp") long timestamp){
       
        SimpleDateFormat sdf = new SimpleDateFormat();
        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));

        String result = sdf.format(new Date(timestamp));
        System.out.print(result);

        return new UTCDate(result);
    }

    @GetMapping("/iso/{timestamp}")
    public ISODate iso(@PathVariable("timestamp") long timestamp){

        String result = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss").format(timestamp);
        return new ISODate(result);
    }


}