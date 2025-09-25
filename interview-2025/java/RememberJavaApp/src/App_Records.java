import java.util.ArrayList;
import java.util.List;

public class App_Records {

    public static void main(String[] args) {
        record Person(String name, int age) {}
        
        List<Person> people = new ArrayList<>();
        people.add(new Person("John", 25));
    }
}
