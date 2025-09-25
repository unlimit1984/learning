import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class App_03_Loops {

    public static void main(String[] args) {
        // ArrayList
        List<String> languages = new ArrayList<>();
        languages.add("Java");
        languages.add("Python");
        languages.add("JavaScript");

        // Современный for-each
        for (String lang : languages) {
            System.out.println(lang);
        }

        // Stream API (Java 8+)
        languages.stream()
            .filter(lang -> lang.startsWith("J"))
            .forEach(System.out::println);

        // Map
        Map<String, Integer> wordCount = new HashMap<>();
        wordCount.put("hello", 1);
        wordCount.put("world", 2);

        // Современные методы
        wordCount.computeIfAbsent("java", k -> 0); // TODO: Разобраться
        wordCount.merge("hello", 1, Integer::sum); // TODO: 

        // Итерация
        wordCount.forEach((word, count) -> 
            System.out.println(word + ": " + count));

        List<String> names = List.of("John", "Jane", "Bob", "Alice");

        // Фильтрация и преобразование
        List<String> result = names.stream()
            .filter(name -> name.length() > 3)
            .map(String::toUpperCase)
            .toList(); // Java 16+ (вместо collect(Collectors.toList()))
        System.out.println(result); // [JOHN, JANE, ALICE]
    }
}
