import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.deser.std.NumberDeserializers;

import java.io.IOException;

public class LocationDoubleDeserializer extends JsonDeserializer<Double> {

    private NumberDeserializers.DoubleDeserializer doubleDeserializer = new NumberDeserializers.DoubleDeserializer(Double.class, null);

    @Override
    public Double deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {

        if (p.hasToken(JsonToken.VALUE_STRING)) {
            throw new IOException("Double value can't be quoted in json object string");
        }
        return doubleDeserializer.deserialize(p, ctxt);
    }
}
