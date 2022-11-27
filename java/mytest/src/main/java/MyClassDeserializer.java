import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

public class MyClassDeserializer extends JsonDeserializer<MyClass> {

    @Override
    public MyClass deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        JsonNode node = jp.getCodec().readTree(jp);
        final String myString = node.get("myString").asText();
        final Integer myInteger = node.get("myInteger").asInt();
//        node.get("myDouble").

        return null;
    }
}
