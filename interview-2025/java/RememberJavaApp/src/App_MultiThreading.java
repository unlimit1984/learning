public class App_MultiThreading {

    private int counter = 0;
    // public void increment() {
    public synchronized void increment() {
        counter++; // Несинхронизированное увеличение
    }

    public static void main(String[] args) throws InterruptedException {
        App_MultiThreading app_MultiThreading = new App_MultiThreading();
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                app_MultiThreading.increment();
            }
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                app_MultiThreading.increment();
            }
        });
        t1.start(); t2.start();
        t1.join();
        t2.join();
        System.out.println(app_MultiThreading.counter);
    }
}
