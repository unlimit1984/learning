public class NumberIncrementApp {
    public static void main(String[] args) {
        char[] arr1 = new char[]{'9', '9'};
        System.out.println(getIncremented(arr1));
        System.out.println(getIncremented2(arr1));


    }

    public static final char[] getIncremented(char[] arr) {
        String s = new String(arr);
        Integer value = Integer.valueOf(s);
        value++;
        return value.toString().toCharArray();
    }

    public static final char[] getIncremented2(char[] arr) {
        int inMind = 1;
        int i = arr.length - 1;
        while (i >= 0) {
            int digit = Character.getNumericValue(arr[i]);
            digit++;

            if (digit != 10) {
                arr[i] = Character.forDigit(digit,10);
                inMind = 0;
                break;
            } else {    //over
                arr[i] = '0';
                inMind = 1;
                i--;
            }
        }
        if (inMind == 1) {
            char[] result = new char[arr.length + 1];
            System.arraycopy(arr, 0, result, 1, arr.length);
            result[0] = '1';
            return result;
        } else {
            return arr;
        }

    }
}
