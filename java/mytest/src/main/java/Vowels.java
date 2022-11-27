public class Vowels {

    public static int getCount(String str) {
        int vowelsCount = 0;
        // your code here
        String s="EeUuIiOoAa";
        for(Character ch: str.toCharArray()){
            if(s.indexOf(ch)!=-1){
                vowelsCount++;
            }
        }

        return vowelsCount;
    }

}