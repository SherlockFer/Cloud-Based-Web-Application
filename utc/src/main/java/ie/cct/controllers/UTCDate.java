package ie.cct.controllers;

public class UTCDate{
    private boolean success;
    private String Time;

    public UTCDate( String Time){
        this.Time=Time;
        this.success=true;
    }

    public String getTime(){
        return Time;

    }
    public Boolean getSucess(){
        return success;

    }
}