import java.util.Objects;

public class MyKey {
    int i;

    public MyKey(int i) {
        this.i = i;
    }

    public int getI() {
        return i;
    }

    public void setI(int i) {
        this.i = i;
    }

    @Override
    public String toString() {
        return "MyKey{" +
                "i=" + i +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MyKey myKey = (MyKey) o;
        return i == myKey.i;
    }

    /*@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || !(o instanceof MyKey)) return false;
        MyKey myKey = (MyKey) o;
        return i == myKey.i;
    }*/

    @Override
    public int hashCode() {

        return Objects.hash(i);
    }
}
