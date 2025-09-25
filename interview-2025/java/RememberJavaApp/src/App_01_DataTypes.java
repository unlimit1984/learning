public class App_01_DataTypes {
    public static void main(String[] args) throws Exception {
        
        // Primitive types - 8 types        
        // byte: 8 bit, -128 ,127
        byte b = 127;
        System.out.println(b);

        // short: 16bit, -32_768 , 32767
        short sh = 32767;
        System.out.println(sh);

        // int: 32 bit, -2_147_483_648 , 2_147_483_647
        int i = 2_147_483_647;
        System.out.println(i);

        // long, 64 bit, -9_223_372_036_854_775_808 , 9_223_372_036_854_775_807
        long l = 9_223_372_036_854_775_807L; // Обязателен суффикс L / l
        System.out.println(l);

        // float, 32 bit, Примерно ±3.4E38 (с плавающей точкой)
        float decimalNumber = 5.75f; // Обязателен суффикс F / f
        System.out.println(decimalNumber); // 5.75

        // double, 64 bit, Примерно ±1.7E308 (с большей точностью)
        double preciseNumber = 123.456;
        System.out.println(preciseNumber); // 123.456

        // char, 16 bit, от (0) до '\uffff' (65,535)
        char letter = 'A';
        System.out.println(letter); // A

        // char, 1 bit,
        boolean isTrue = true;
        System.out.println(isTrue); // true
    
        // Declaration and initialization
        int i2 ;
        // System.out.println(ii); 
        i2 = 7;

        // Классы обертки
        Byte bb = 8;
        Short sh2 = 12;
        Integer ii = 22;
        Long ll = 123l;
        Float ff = 123f;
        Double dd = 123.23;
        Character ch2 = 'B';
        Boolean isTrue2 = true; //Boolean.FALSE;

    }
}
