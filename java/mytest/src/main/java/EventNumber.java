import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class EventNumber {
  public static void main(String[] args) {
    List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 10, 12, 9, 17, 18, 99, 123);
    Iterator<Integer> evenIt = evenNumberedIterator(list);
    while (evenIt.hasNext()) {
      System.out.println(evenIt.next());
    }
  }

  public static Iterator<Integer> evenNumberedIterator(List<Integer> list) {
    Iterator<Integer> originalIt = list.iterator();

    Iterator<Integer> evenNumberedIt = new Iterator<Integer>() {
      Integer value = null;

      @Override
      public boolean hasNext() {
        while (originalIt.hasNext()) {
          value = originalIt.next();
          if (value % 2 == 0) {
            return true;
          }
        }
        return false;
      }

      @Override
      public Integer next() {
        return value;
      }
    };
    return evenNumberedIt;
  }
}
