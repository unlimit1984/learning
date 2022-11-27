public class BufferExecutor {

    public static void main(String[] args) throws InterruptedException {
        Buffer buffer = new Buffer();

        Producer[] producers = new Producer[5];

        for (int i = 0; i < producers.length; i++) {
            producers[i] = new Producer("producer" + i, buffer);
            producers[i].start();
        }

        Consumer[] consumers = new Consumer[5];
        for (int i = 0; i < consumers.length; i++) {
            consumers[i] = new Consumer("consumer"+i, buffer);
            consumers[i].start();
        }

        for (Producer producer : producers) {
            producer.join();
        }

        for (Consumer consumer:consumers){
            consumer.join();
        }


    }
}

class Producer extends Thread {

    private Buffer buffer;
    private String name;

    public Producer(String name, Buffer buffer) {
        this.buffer = buffer;
        this.name = name;
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            String value = "Value" + i;
            buffer.push(value);
            System.out.println(name + " pushed " + value);
        }
    }
}

class Consumer extends Thread {

    private Buffer buffer;
    private String name;

    public Consumer(String name, Buffer buffer) {
        this.buffer = buffer;
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println(name + ": " + buffer.get());
        }
    }
}