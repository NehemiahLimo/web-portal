class ExportLink exntends Component {
  super(props) {

  }

  return (
    <div class="container container-fluid">
        <button class="btn btn-success">Export to PDF<span class="glyphicon glyphicon-pencil"></span></button>
        <button class="btn btn-success">Export to CSV<span class="glyphicon glyphicon-file"></span></button>
        <button class="btn btn-success">Export to XML<span class="glyphicon glyphicon-home"></span></button>

    </div>
  )
}
