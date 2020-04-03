@app
Covid-19_Test

@static
folder build

@http
put /access
put /form

@tables
accesses
  scopeID *String
  values **String

form
  scopeID *String
  values **String
