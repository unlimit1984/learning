import java.util.Arrays;

public class MotorolaTestsApp {
    public static void main(String[] args) {

//        System.out.println(getBeautifulArrays(new int[]{1, 2, 3, 4, 5}, 2));

//        System.out.println(binarySearch(new int[]{},1));
//        System.out.println(binarySearch(new int[]{0},1));
//        System.out.println(binarySearch(new int[]{1},1));
//        System.out.println(binarySearch(new int[]{1,2},2));
//        System.out.println(binarySearch(new int[]{1,2,3},2));
//        System.out.println(binarySearch(new int[]{1,2,3,4},5));

        int[] a1 = new int[]{1,2,3,4};
        int[] a2 = new int[]{2,4,6};

        printСoincidentals(a1,a2);
    }

    static String getDNAFrom(String s) {
        StringBuffer sb = new StringBuffer(s);
        sb.reverse();
        return sb.toString()
                .replaceAll("A", "c")
                .replaceAll("C", "a")
                .replaceAll("G", "t")
                .replaceAll("T", "g")

                .replaceAll("a", "A")
                .replaceAll("c", "C")
                .replaceAll("g", "G")
                .replaceAll("t", "T");
    }

    //
    static int getBeautifulArrays(int[] a, int m) {
        int result = 0;
        for (int start = 0; start < a.length; start++) {
            for (int end = start; end < a.length; end++) {
                if (end - start < m - 1) {
                    continue;
                }
                int odd_count = 0;
                for (int i = start; i <= end; i++) {
                    if (a[i] % 2 != 0) {
                        odd_count++;
                        if (odd_count > m) {
                            break;
                        }
                    }
                }
                if (odd_count == 2) {
                    result++;
                }
            }
        }

        return result;
    }

    //Return coincidental elements in both arrays
    static void printСoincidentals(int[] a1, int[] a2) {
        if (a1.length == 0 || a2.length == 0) {
            return;
        }

        int i = 0;
        while (i < a1.length) {
            if (a1[i] < a2[0]) {
                i++;
                continue;
            } else if (a1[i] > a2[a2.length - 1]) {
                break;
            } else if (binarySearch(a2, a1[i])) {
                System.out.println(a1[i]);
            }
            i++;
        }
    }

    //Implement binary search
    static boolean binarySearch(int[] a, int e) {
        if (a.length == 0) {
            return false;
        } else if (a.length == 1) {
            if (a[0] == e) {
                return true;
            } else {
                return false;
            }
        } else {
            if (a[a.length / 2] == e) {
                return true;
            } else if (e < a[a.length / 2]) {
                int[] left_a = Arrays.copyOfRange(a, 0, a.length / 2);
                return binarySearch(left_a, e);
            } else {    //e > a[a.length / 2]
                int[] right_a = Arrays.copyOfRange(a, a.length / 2, a.length);
                return binarySearch(right_a, e);
            }
        }
    }
}
