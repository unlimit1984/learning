import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.NoArgsConstructor;
import lombok.ToString;


@ToString
@NoArgsConstructor
//@JsonDeserialize(using = LocationDoubleDeserializer.class)
public class MyClass {

    @JsonDeserialize(using = LocationDoubleDeserializer.class)
    private Double myDouble = null;

    private Double myDouble2 = null;

    //@JsonDeserialize(using = NumberDeserializers.IntegerDeserializer.class)
    private Integer myInteger = null;

    //@JsonDeserialize(using = StringDeserializer.class)
    private String myString = null;

    public Double getMyDouble() {
        return myDouble;
    }

    public void setMyDouble(Double myDouble) {
        this.myDouble = myDouble;
    }

    public Integer getMyInteger() {
        return myInteger;
    }

    public void setMyInteger(Integer myInteger) {
        this.myInteger = myInteger;
    }

    public Double getMyDouble2() {
        return myDouble2;
    }

    public void setMyDouble2(Double myDouble2) {
        this.myDouble2 = myDouble2;
    }

    public String getMyString() {
        return myString;
    }

    public void setMyString(String myString) {
        this.myString = myString;
    }

}
