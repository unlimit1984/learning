import java.util.List;

public class GetPreviousBeforeMax {

  public static int getPreviousBeforeMax(List<Integer> list) {
    //1st solution
//    Set<Integer> set = new TreeSet<>(list);
//    List<Integer> reversedList = set.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
//
//    if (reversedList.size() == 0) {
//      throw new RuntimeException();
//    } else if (reversedList.size() == 1) {
//      return reversedList.get(0);
//    } else {
//      return reversedList.get(1);
//    }
    /////////////////////////

//Good 2nd solution
    boolean isMaxExist = false, isBeforeMaxExist = false;
    int max = 0, beforeMax = 0;

    for (int i = 0; i < list.size(); i++) {
      if (i == 0) {
        max = list.get(i);
        isMaxExist = true;
      } else if (list.get(i) > max) {
        if (!isBeforeMaxExist) {//еще не найдено предпоследнее число
          beforeMax = max;
          isBeforeMaxExist = true;
          max = list.get(i);
        } else { //найдено предпоследнее число
          beforeMax = max;
          max = list.get(i);
        }
      } else if (isBeforeMaxExist && list.get(i) > beforeMax) {
        beforeMax = list.get(i);
      } else if (!isBeforeMaxExist && list.get(i) != max) {
        beforeMax = list.get(i);
        isBeforeMaxExist = true;
      }
    }

    if (isBeforeMaxExist) {
      return beforeMax;
    } else if (isMaxExist) {
      return max;
    } else {
      throw new RuntimeException();
    }
  }
}

