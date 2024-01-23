```mermaid
    sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate palvelin
    palvelin-->>selain: {content: "testi", date: "2024-01-23T21:21:28.886Z"}
    deactivate palvelin

    note right of selain: Palvelin ei pyydä uudelleenohjausta ja selain pysyy samalla sivulla.
```