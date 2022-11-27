class Kata {
    public static String getMiddle(String word) {

        if(word==null || "".equals(word)){
            return "";
        } else{
            int middle = word.length()/2;
            int rest = word.length()%2;

            if(rest==1){
                return word.substring(middle, middle+1);
            } else{
                return word.substring(middle-1, middle+1);
            }
        }
    }
}