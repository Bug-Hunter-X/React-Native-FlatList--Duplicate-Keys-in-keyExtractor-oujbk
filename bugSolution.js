To fix the issue, ensure each item in your data array has a unique key.  Here's how you can modify the code:

```javascript
import { uuid } from 'uuidv4'; // You'll need to install this package: npm install uuidv4

const data = [ 
  { id: uuid(), name: 'Item 1' },
  { id: uuid(), name: 'Item 2' },
  { id: uuid(), name: 'Item 3' }
];

<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

This uses the `uuid` package to generate unique identifiers.  Alternatively, if your data already has a unique ID field, use that instead.  The key is to guarantee uniqueness to prevent unexpected behavior.