import java.text.MessageFormat;

public class App_MemoryModel {
    public static void main(String[] args) {
        String s1 = "hello";        // В String Pool
        String s2 = "hello";        // Ссылка на тот же объект в Pool
        String s3 = new String("hello"); // Новый объект в Heap

        System.out.println(MessageFormat.format("s1 == s2: {0}", s1 == s2)); // true (один объект)
        System.out.println(MessageFormat.format("s1 == s3: {0}", s1 == s3)); // false (разные объекты)
        System.out.println(MessageFormat.format("s1.equals(s3): {0}", s1.equals(s3))); // true (содержимое одинаковое)

        // Проверка с интернированием
        String s4 = s3.intern();    // Возвращает ссылку на Pool
        System.out.println(MessageFormat.format("s1 == s4: {0}",s1 == s4)); // true (после интернирования)
 
    }
}
