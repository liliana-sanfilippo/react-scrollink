
## Installation

```bash
npm install @liliana-sanfilippo/react-link
```

```bash
yarn add @liliana-sanfilippo/react-link
```

## USAGE 

### Using navigation / routing logic

```typescript
import { useNavigation } from "@liliana-sanfilippo/react-link";
```

### Navigation handling for pages

Must be used for EVERY page.

```typescript
import { handleNavigation } from "@liliana-sanfilippo/react-link";
```

Eample: 

```typescript
export function Team() {
    handleNavigation();
      return (
        <>
          ...
        </>
        )
}
```

### Using links

If used, it build the necessary link for the url based routing.

```typescript
import { Link } from "@liliana-sanfilippo/react-link";
```

#### Normal Links

```typescript
<Link text="Accordion title" page="human-practice"/>
```


#### Scroll to specific section / item on a page

```typescript
<Link text="Accordion title" page="human-practices" scrollToId="item-id"/>
```

#### Scrolling to and opening bootstrap accordions


```typescript
<Link text="Accordion title" page="human-practices" collapseId="item-id"/>
```

Important: You need to add a few thinks to your page: 

```typescript
export function HumanPractices() {

  // The usual navigation handling
  handleNavigation();

  // to ensure that the right Accordion Item is set as active Accordion
  const [searchParams] = useSearchParams(); 
  const [activeKey, setActiveKey] = useState<string | null>(null);
  useEffect(() => {
  const collapseId = searchParams.get("collapseId");
  if (!collapseId) return;
  setActiveKey(collapseId)
}, [searchParams]);

  <Accordion id="hp-accordion" activeKey={activeKey} 
       onSelect={(eventKey) => setActiveKey(eventKey != null ? String(eventKey) : null)}
      >
    // Eaxmple Accordion item
    <Accordion.Item eventKey="accordion-id" id="accordion-id" >
        <Accordion.Header> Title </Accordion.Header>
        <Accordion.Body>
          Text
        </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </>
  )
}
```




