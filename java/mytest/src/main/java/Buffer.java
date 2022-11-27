public class Buffer {

    Object sync = new Object();

    private String element;

    public String get(){
        synchronized (sync) {
            while (element==null){
                try {
                    sync.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            sync.notify();

            return element;
        }
    }

    public void push(String value){
        synchronized (sync) {
            while(element!=null){
                try {
                    sync.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            element = value;
            sync.notify();
        }
    }

}
