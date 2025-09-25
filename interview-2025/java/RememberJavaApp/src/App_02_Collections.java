import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

public class App_02_Collections {
    public static void main(String[] args) {
                // List - ArrayList
        List<String> list = new ArrayList<>();
        list.add("abc");
        list.add("def");
        System.out.println(list.get(0));
        for( String s: list){
            System.out.println(s);
        }
        // List - LinkedLst - связанный список
        List<Integer> linkedIntegers = new LinkedList<>();
        linkedIntegers.add(1);
        linkedIntegers.add(2);
        linkedIntegers.add(3);
        linkedIntegers.addFirst(4);
        linkedIntegers.addLast(100);
        System.out.println(linkedIntegers);

        // List - CopyOnWriteArrayList - Thread-safe ArrayList
        List<String> safeList = new CopyOnWriteArrayList<>();
        safeList.add("ab");
        safeList.add("cd");
        System.out.println(safeList);

        // Set - HashSet
        Set<String> set = new HashSet<>();
        set.add("apple");
        set.add("apple"); // дубликат не добавится
        set.add("orange");
        System.out.println(set);

        // Set - LinkedHashset
        Set<String> orderedSet = new LinkedHashSet<>();
        orderedSet.add("apple");
        orderedSet.add("apple");
        orderedSet.add("orange");
        orderedSet.add("pear");
        System.out.println(orderedSet);

        // Set - TreeSet - auto sorted Set
        Set<String> sortedSet = new TreeSet<>();
        sortedSet.add("zebra");
        sortedSet.add("pear");
        sortedSet.add("apple"); // автоматически сортируется
        System.out.println(sortedSet);

        // Map - HashMap - ключ-значение / словарь
        Map<String, Integer> map = new HashMap<>();
        map.put("age", 30);
        map.get("age"); // 30

        // Map - LinkedHashMap - связанный словарь
        Map<String, Integer> linkedMap = new LinkedHashMap<>();
        linkedMap.put("apple", 2);
        linkedMap.put("zebra", 30);
        linkedMap.put("elephant", 45);
        System.out.println(linkedMap);

        // Map - TreeMap - sorted by key - отсортированный по ключам
        Map<String, Integer> sortedMap = new TreeMap<>();
        sortedMap.put("apple", 2);
        sortedMap.put("zebra", 30);
        sortedMap.put("elephant", 45);
        System.out.println(sortedMap);
        
        // Map - ConcurrentHashMap - потокобезопасный
        Map<String, Integer> concurrentMap = new ConcurrentHashMap<>();
        concurrentMap.put("apple", 2);
        concurrentMap.put("zebra", 30);
        concurrentMap.put("elephant", 45);
        System.out.println(concurrentMap);

        // Queue - ArrayDeque - FIFO (самая быстрая очередь)
        Queue<String> queue = new ArrayDeque<>();
        // queue.add(null)
        queue.offer("first");
        queue.offer("second");
        queue.offer("third");
        System.out.println(queue);
        queue.poll(); // "first"
        System.out.println(queue);

        // Queue - LinkedList - FIFO
        Queue<Integer> queueAsLinkedList = new LinkedList<>();
        queueAsLinkedList.offer(11);
        queueAsLinkedList.offer(22);
        queueAsLinkedList.offer(33);
        System.out.println(queueAsLinkedList);
        queueAsLinkedList.poll();
        System.out.println(queueAsLinkedList);

        //Queue - PriorityQueue - берем первый по сортировке
        Queue<Integer> pq = new PriorityQueue<>();
        pq.offer(3);
        pq.offer(1);
        pq.offer(2);
        System.out.println(pq);
        pq.poll(); // 1 (наименьший)
        System.out.println(pq);
        pq.poll(); // 1 (наименьший)
        System.out.println(pq);

        // Неизменяемые коллекции
        // Java 9+ - создание неизменяемых коллекций
        List<String> immutableList = List.of("a", "b", "c");
        // immutableList.add("aaa");//will throw java.lang.UnsupportedOperationException
        Set<String> immutableSet = Set.of("a", "b", "c");
        Map<String, Integer> immutableMap = Map.of("a", 1, "b", 2);

    }
}
