package ie.cct.controllers;

public class ISODate{
    private boolean success;
    private String Time;

    public ISODate( String Time){
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