import java.net.URISyntaxException;

/**
 * Created by Vladimir_Vysokomorny on 11-Jan-18.
 */
public class MainApp {
    public static void main(String[] args) throws URISyntaxException {
//        System.out.println(Kata.getMiddle("1"));
//        System.out.println(Vowels.getCount("asdfghjklooO"));


//        HashMap<MyKey, String> map = new HashMap<>();
//
//        MyKey myKey = new MyKey(1);
//        System.out.println(myKey.hashCode());
//        map.put(myKey, "MyValue");
//        map.put(myKey, "MyValue");
//
//        myKey.setI(5);
//
//        map.forEach((myKey1, s) -> System.out.println("Key:"+ myKey1 +",Value:"+s));
//
//        System.out.println(myKey.hashCode());
//
//        System.out.println(map.get(myKey));
//
//        MyKeyChild myKeyChild = new MyKeyChild(5);
//
//        System.out.println(myKeyChild.equals(myKey));


//        Map<String, String> map = new HashMap<>();
//        System.out.println("1: " + map.put("1", "aaa"));                        //null
//        System.out.println("2: " + map.putIfAbsent("2", "bbb"));    //null
//        System.out.println("2: " + map.putIfAbsent("2", "BBB"));               //bbb
//        System.out.println("3: " + map.computeIfAbsent("3", v -> "ccc"));   //ccc
//        System.out.println("3: " + map.computeIfAbsent("3", v -> "CCC"));   //ccc
//        System.out.println("4: " + map.computeIfPresent("4", (k, v) -> "ddd"));   //null
//        System.out.println("5: " + map.put("5", "eee"));                               //eee
//        System.out.println("5: " + map.computeIfPresent("5", (k, v) -> "EEE"));   //EEE
//        System.out.println(map);

//    String path = "files/ąż.txt";

        //BAD
//    URL resourceUrl = MainApp.class.getClassLoader().getResource(path);
//    File f = new File(resourceUrl.getFile());
//    System.out.println("fileName: " + f.getName());
//    System.out.println("filePath: " + f.getPath());


        //Good in Linux/Windows, bad in docker runtime Container aem
//    Path p = Paths.get(path);
//    System.out.println("path parent: " + p.getParent().toString());
//    System.out.println("path: " + p.toString());
//    System.out.println("path fileName: " + p.getFileName());

//    Path p = Paths.get(MainApp.class.getClassLoader().getResource(path).toURI());
//    System.out.println("path parent: " + p.getParent().toString());
//    System.out.println("path: " + p.toString());
//    System.out.println("path fileName: " + p.getFileName());

        //GOOD
//    Path p = Paths.get(MainApp.class.getClassLoader().getResource(path).toURI());
//    File f = p.toFile();
//    InputStream is = new FileInputStream(f);
//    String content = IOUtils.toString(is);
//    System.out.println(String.format("The content of file %s: %s is: \n%s", f.getName(), f.getPath(), content));

        //GOOD
//    URL resourceUrl = MainApp.class.getClassLoader().getResource(path);
//    File file = Paths.get(resourceUrl.toURI()).toFile();
//    System.out.println(file.getName());
//    System.out.println(file.getPath());


        //Good for not existing file
//    File f = new File("deed/ść.txt");
//    System.out.println(f.getName());
//    System.out.println(f.getPath());


        //Good
//    InputStream is = MainApp.class.getResourceAsStream(path/*"files/ąż.txt"*/);
//    String content = IOUtils.toString(is);
//    System.out.println(String.format("The content of file: %s is: \n%s", path, content));

        //Good (inside target folder)
//    InputStream is = MainApp.class.getClassLoader().getResourceAsStream(path);
//    String content = IOUtils.toString(is);
//    System.out.println(content);

        //Bad for non UTF-8 file names
//    path = "files/abc.txt";   //uncomment
//    URL resourceUrl = MainApp.class.getClassLoader().getResource(path);
//    File file = new File(resourceUrl.getPath());
//    InputStream is = new FileInputStream(file);
//    String content = IOUtils.toString(is);
//    System.out.println(String.format("The content of file: %s is: \n%s", file.getCanonicalPath(), content));

        //Bad (Can't create a File object)
//    InputStream is = MainApp.class.getClassLoader().getResourceAsStream(path);
//    FileInputStream fis = new FileInputStream(path);
//    File file = new File();


//    Set<Integer> set = new TreeSet<>(Arrays.asList(1, 2, 3, 4, 5, 1, 2, 3, 4, 5));
//    System.out.println(set);

//    List<String> list = null;
//    for (String s : list) {
//      System.out.println(s);
//
//    }

//    StackTraceElement[] stackTraceElements = Thread.getAllStackTraces().get(Thread.currentThread());
//    //stackTraceElements.length
//    for (int i = 0; i <= 100; i++) {
//      StackTraceElement element = stackTraceElements[i];
//      System.out.println(String.format("%s.%s line %s", element.getClassName(), element.getMethodName(), element.getLineNumber()));
//    }
//    if(stackTraceElements.length > 100) {
//      System.out.println("and more...");
//    }


//    Object o = Optional.ofNullable(null);
//    System.out.println(Objects.isNull(o));

//        String systemName;
//        if (true) {
//            systemName = null;
//        }
//        String email = "test@mail.com";
////        String externalId = systemName != null ? systemName : email;
//
//        String externalId = Optional.ofNullable(systemName).orElse(email);
//        System.out.println(externalId);

//--------------------------
//        List<String> arr = Arrays.asList("ab", "cd", "ef");
//        List<String> arr2 = new ArrayList<>();
//        List<String> arr3 = null;
//
//        System.out.println(CollectionUtils.isEmpty(arr));
//        System.out.println(CollectionUtils.isEmpty(arr2));
//        System.out.println(CollectionUtils.isEmpty(arr3));
//
//        System.out.println(CollectionUtils.isNotEmpty(arr));
//        System.out.println(CollectionUtils.isNotEmpty(arr2));
//        System.out.println(CollectionUtils.isNotEmpty(arr3));
//--------------------------

//        System.out.println(123);
//        int result = romanToInt("XXX");
//
//        System.out.println(result);
//--------------------------
//        int x = -6;
//        System.out.println(Integer.toBinaryString(x));
//        x = 6;
//        System.out.println(Integer.toBinaryString(x));
//
//        String max = Integer.toBinaryString(Integer.MAX_VALUE);
//        System.out.println(max + ",   MAX:" + Integer.MAX_VALUE);
//        System.out.println(max.length());
//
//        String min = Integer.toBinaryString(Integer.MIN_VALUE+1);
//        System.out.println(min + ",   MIN:" + Integer.MIN_VALUE);
//        System.out.println(min.length());
//
//        int val = -7;
//        String val_str = Integer.toBinaryString(val);
//        System.out.println(val_str + ",   VAL:" + val);
//        System.out.println(min.length());
//
//        val = 123;
//        val_str = Integer.toBinaryString(val);
//        System.out.println(val_str + ",   VAL:" + val);
//        System.out.println(min.length());
//
//        val = 321;
//        val_str = Integer.toBinaryString(val);
//        System.out.println(val_str + ",   VAL:" + val);
//        System.out.println(min.length());
//--------------------------


        System.out.println(Character.getNumericValue('7'));

    }

//    private static int romanToInt(String s) {
//        //corner cases: IV=4, IX=9, XL=40, XD=90, CD=400, CM=900
//        Map<Character, Integer> map = Map.of('I', 1, 'V', 5, 'X', 10, 'L', 50, 'C', 100, 'D', 500, 'M', 1000);
//
//        int result = 0;
//        int i = 0;
//        while (i < s.length()) {
//            char current = s.charAt(i);
//
//            if (current == 'M') {
//                result += map.get(current);
//                i++;
//                continue;
//            }
//
//            if (i + 1 < s.length()) {
//                char next = s.charAt(i + 1);
//
//                if (current == 'C') {
//                    if (next == 'D') {
//                        result += 400;
//                        i += 2;
//                    } else if (next == 'M') {
//                        result += 900;
//                        i += 2;
//                    } else {
//                        result += 100;
//                        i++;
//                    }
//                } else if (current == 'X') {
//                    if (next == 'L') {
//                        result += 40;
//                        i += 2;
//                    } else if (next == 'D') {
//                        result += 90;
//                        i += 2;
//                    } else {
//                        result += 10;
//                        i++;
//                    }
//                } else if (current == 'I') {
//                    if (next == 'V') {
//                        result += 4;
//                        i += 2;
//                    } else if (next == 'X') {
//                        result += 9;
//                        i += 2;
//                    } else {
//                        result += 1;
//                        i++;
//                    }
//                }
//            } else {
//                result += map.get(current);
//                i++;
//            }
//        }
//        return result;
//    }
//
//    private String longestCommonPrefix(String[] strs) {
//        HashMap<String, Integer> duplicates = new HashMap<>();
//
//        for(int i = 0; i<strs.length; i++) {
//            for(int j = i+1; j<strs.length; j++) {
//                String prefix = commonFullPrefix(strs[i], strs[j]);
//
//                if(prefix.length()>0){
//                    for(int k=1; k<=prefix.length(); k++) {
//                        if (duplicates.containsKey(prefix.substring(0, k))) {
//                            int repeats = duplicates.get(prefix);
//                            duplicates.put(prefix.substring(0, k), repeats+1);
//                        } else {
//                            duplicates.put(prefix, 2);
//                        }
//                    }
//                }
//
//            }
//        }
//
//        String result = "";
//        int maxRepeats = 0;
//        duplicates.forEach((key, value) ->{
//            if(value>maxRepeats){
//                maxRepeats = value;
//                result = key;
//            }
//        });
//        return result;
//    }

//    private String commonFullPrefix(String a, String b) {
//        String prefix = "";
//        for(int i=0; i<a.length() || i<b.length(); i++){
//            if(a.charAt(i) == b.charAt(i)){
//                prefix+=a.charAt(i);
//            } else{
//                break;
//            }
//        }
//        return prefix;
//    }

    //arr = [1,2,3,4,5,6,7,8,9,10] sum = 8
//    private static boolean hasPairWithSumForSortedArray(int[] arr, int sum) {
//        int min = 0;
//        int max = arr.length - 1;
//        while (min < max) {
//            int s = arr[min] + arr[max];
//            if (s == sum) {
//                return true;
//            } else if (s < sum) {
//                min++;
//            } else {
//                max--;
//            }
//        }
//        return false;
//    }

    // arr = [5,1,4,4,2,8,6,4,7,5,6,6,3,2,9] sum = 8
//    private static boolean hasPairWithSumForUnsortedArray(int[] arr, int sum) {
//        Set<Integer> oldValues = new HashSet<>();
//        for (int value : arr) {
//            if (oldValues.contains(sum - value)) {
//                return true;
//            } else {
//                oldValues.add(value);
//            }
//        }
//        return false;
//    }
}

