import java.util.*;

public class App_Exercises {
    public static void main(String[] args) {
        // Map<String, Integer> map = Map.of("aa", 1, "bb", 2, "cc", 3);
        Map<String, Integer> map = new HashMap<>(Map.of("aa", 1, "bb", 2, "cc", 3));
        int aaValue = map.getOrDefault("aa", 0);
        map.putIfAbsent("aa", 999);
        int unknwownDefault = map.getOrDefault("unknown", 0);
        System.out.println(map);
        System.out.println("aaValue " + aaValue);
        System.out.println("Unknown: " + unknwownDefault);
    }
}
