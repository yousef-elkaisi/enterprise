// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('sv-SE', {
  // layout/language
  language: 'sv',
  englishName: 'Swedish (Sweden)',
  nativeName: 'svenska (Sverige)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'yyyy-MM-dd', // use four digit year
      medium: 'd MMM yyyy',
      long: 'd MMMM yyyy',
      full: 'EEEE d MMMM yyyy',
      month: 'd MMMM',
      year: 'MMMM yyyy',
      timestamp: 'HH:mm:ss',
      hour: 'HH:mm',
      datetime: 'yyyy-MM-dd HH:mm',
      timezone: 'yyyy-MM-dd HH:mm zz',
      timezoneLong: 'yyyy-MM-dd HH:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
      abbreviated: ['sön', 'mån', 'tir', 'ons', 'tor', 'fre', 'lör'],
      narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
      abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['fm', 'em'],
    firstDayofWeek: 1, // Starts on Monday
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'kr',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    percentSuffix: ' %',
    percentPrefix: '',
    minusSign: '-',
    decimal: ',',
    group: ' ',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Med ensamrätt. Ord- och figurmärken i den här publikationen är varumärken och/eller registrerade varumärken som tillhör Infor och/eller dess dotterbolag. Med ensamrätt. Alla andra varumärken i den här publikationen tillhör respektive ägare' },
    Actions: { id: 'Actions', value: 'Åtgärder', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Ytterligare objekt', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Lägg till', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Lägg till kommentarer', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Lägg till ny flik', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Administrativ ledighet', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Skapa avancerat filter', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Avisering', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Aviseringsmeddelande(n) på sida', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Alla', comment: 'All items in the context of a filter' },
    AllDay: { id: 'AllDay', value: 'Hela dagen', comment: 'Label for an event which lasts all day' },
    AllResults: { id: 'AllResults', value: 'Alla resultat för', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Justera mot nederkant', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Centrera horisontellt', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Bärnsten', comment: 'Color in our color palette' },
    Amethyst: { id: 'Amethyst', value: 'Ametist', comment: 'Color in our color palette' },
    Apply: { id: 'Apply', value: 'Verkställ', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Meny', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Bifoga', comment: 'Attach' },
    Available: { id: 'Available', value: 'Tillgängliga', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azur', comment: 'Color in our color palette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Bakgrundsfärg', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Mellan', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Blockcitat', comment: 'Term for Block Quotations in editing' },
    Bold: { id: 'Bold', value: 'Fetstil', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Bokmärkt', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Bokmärk detta', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Länkstig', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Läsare', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Punktlista', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalender', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Avbryt', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Caps Lock på', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Kundvagn', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centrera', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Återstående tecken: {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Max antal tecken ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Ändra urvalet med piltangenterna.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Ändra vy', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Kryssruta', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Markerad', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Rensa', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Rensa filter', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Rensa formatering', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Rensa urval)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Klocka', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Stäng', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Klickbar i redigeringsprogram', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopiera', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Minimera', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Minimera programfält', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Kolumner', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Kommentarer', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Företagshelgdag', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponent', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Skriv', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Avslutad', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Bekräfta', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Bekräftelsemeddelande(n) på sida', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Cookies aktiverade', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Innehåller', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'CSS-klass', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Klipp ut', comment: 'Cut tooltip' },
    Dark: { id: 'Dark', value: 'Mörkt', comment: 'The name of one of the application theme variants.' },
    Date: { id: 'Date', value: 'Datum', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Dag', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dagar ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} dagar försenad', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} dagar återstår', comment: 'For a task /date UI' },
    Default: { id: 'Default', value: 'Förval', comment: 'Refers to a default object of a generic type' },
    Delete: { id: 'Delete', value: 'Radera', comment: 'Delete Toolbar Action Tooltip' },
    DeleteEvent: { id: 'DeleteEvent', value: 'Radera händelse', comment: 'Delete an Event (from a calendar)' },
    Device: { id: 'Device', value: 'Enhet', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Fördela horisontellt', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokument', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Diskretionär ledighet', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Raden har ändrats', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Gå nedåt', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Gå uppåt', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Listruta', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Innehåller inte', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Slutar inte med', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Inte lika med', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Börjar inte med', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Ned', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Hämta', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Duplicera', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Har antingen markerats eller inte markerats', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Slutar med', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Skriv kommentarer här ...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Fel', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Filtypen tillåts inte', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Tillåten filstorlek har överskridits', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Tillåtet antal filer har överskridits', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Felmeddelande(n) på sida', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Mejladressen är inte giltig', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragd', comment: 'Color in our color palette' },
    Expand: { id: 'Expand', value: 'Expandera', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Expandera programfält', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Expandera/minimera', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Exportera som kalkylblad', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Redigera', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Lika med', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Händelse', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Avsluta helskärm', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Exportera', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Exportera till Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Favorit', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Filöverföring. Bläddra efter en fil med Retur', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Fältfilter', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filter', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Första sidan', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Mapp', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Från', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Helskärm', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Gå framåt', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Gå tillbaka', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Gå nedåt', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Gå uppåt', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Gå', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafit', comment: 'Color in our color palette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Större än eller lika med', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Större än', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Rutnät', comment: 'Grid tooltip' },
    Group: { id: 'Group', value: 'Grupp', comment: 'Group of data in a datagrid with grouped rows' },
    Groups: { id: 'Groups', value: 'Grupper', comment: 'Plural for group' },
    GroupsPerPage: { id: 'GroupsPerPage', value: '{0} grupper per sida', comment: 'Dropdown allows the user to select how many visible Groups the {} placeholder shows value.' },
    Hour: { id: 'Hour', value: 'Timme', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Timmar', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Rubrik tre', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Rubrik fyra', comment: 'Heading Four tooltip' },
    HighContrast: { id: 'HighContrast', value: 'Hög kontrast', comment: 'The name of a theme variant' },
    Highest: { id: 'Highest', value: 'Högsta', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Startsida', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Html', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Bild', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importera', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Info', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informationsmeddelanden på sidan', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Pågår', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Infoga', comment: 'Insert Modal Dialog Button' },
    InsertImage: { id: 'InsertImage', value: 'Infoga bild', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Infoga länk', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Infoga URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Kursiv', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Ogiltigt datum', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Ogiltig tid', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventering', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Inom intervall', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Är tom', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Är inte tom', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Valda objekt', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centrera', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Vänsterjustera', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Högerjustera', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Sökord', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Starta', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Sista sidan', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Vänster', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Förklaring', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Mindre än eller lika med', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Mindre än', comment: 'Less Than in icons for filtering' },
    Light: { id: 'Light', value: 'Ljust', comment: 'The name of one of the application theme variants.' },
    Link: { id: 'Link', value: 'Länk', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Läs in', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Läser in', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Språkvariant', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Låst', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Logga ut', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Sök', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Lägsta', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Mejl', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Kartnål', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maximera', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Median', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Medelhög', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Meny', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Dela i Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minuter', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimera', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Minus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobil', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Månad', comment: 'As in a date month' },
    More: { id: 'More', value: 'Mer', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Fler åtgärder', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Flytta åt vänster', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Flytta åt höger', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', modifierat', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Nytt', comment: 'Add new rowstatus in datagrid' },
    NewEvent: { id: 'NewEvent', value: 'Ny händelse', comment: 'Menu item for adding a new calendar event.' },
    NewEventDetails: { id: 'NewEventDetails', value: 'Nya händelsedetaljer', comment: 'Placholder text for adding a new calendar event.' },
    NewDocument: { id: 'NewDocument', value: 'Nytt dokument', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nytt objekt', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Nytt fönster', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Nästa', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Nästa sida', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Nästa månad', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Nej', comment: 'On a dialog button' },
    NoCommentsEntered: { id: 'NoCommentsEntered', value: 'Inga kommentarer har angetts', comment: 'Placeholder for where no comments are added.' },
    NoData: { id: 'NoData', value: 'Inga data är tillgängliga', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Inga data är tillgängliga. Välj ett nytt filter om du vill se fler resultat.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Inga data är tillgängliga. Välj ett alternativ i listan ovan om du vill se fler resultat.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Inga', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Inga resultat', comment: 'Search Results Text' },
    NoTitle: { id: 'NoTitle', value: '(Ingen rubrik)', comment: 'Placeholder text for when you add an event to the calendar with no title typed.' },
    Normal: { id: 'Normal', value: 'Normal', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Anteckningar', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Ej vald', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Numrerad lista', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'Ok', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Öppna/bakåt/stäng', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Öppna/stäng', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operativsystem', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Infoga/ta bort numrerad lista', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'sida ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Sida {0} av {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Du är på sida ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Betald ledighet', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Klistra in', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Lösenordet</strong><br>Måste bestå av minst 10 tecken<br>Måste innehålla minst ett versalt tecken<br>Måste innehålla minst ett gement tecken<br>Måste innehålla ett specialtecken<br>Får inte innehålla ditt användarnamn<br>Får inte ha använts tidigare<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Lösenorden måste stämma överens', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Topp', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Väntande', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Anpassa kolumner', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Plan', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Plattform', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Period', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Välj ett datum med nedåtpilen', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Öppna snabbmenyn med Skift+F10.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Föregående', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Föregående månad', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Föregående sida', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Skriv ut', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Intervall', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} poster per sida', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Gör om', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Ändra ordning på rader', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Uppdatera', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Begära ledighet', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Obligatoriskt', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Återställ', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Återställ till förval', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Resultat', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Resultat', comment: 'As in showing N Results (plural) in a List' },
    ResultOf: { id: 'ResultOf', value: '{0} av {1} resultat', comment: 'Text Showing current and total number of Result' },
    ResultsOf: { id: 'ResultsOf', value: '{0} av {1} resultat', comment: 'Text Showing current and total number of Results' },
    RightAlign: { id: 'RightAlign', value: 'Högerjustera', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Högerjustera', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Höger', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Roller', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Radhöjd', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubin', comment: 'Color in our color palette' },
    RunFilter: { id: 'RunFilter', value: 'Kör filter', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Samma fönster', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Spara', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Spara vyn', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Sparade vyer', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Schema', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Sekunder', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Sök', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Sök efter ett kolumnnamn', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Sök i mapp', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Sök i lista', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Markera', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Välj en dag', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Markerat', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Markera alla', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Skicka', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Ange tid', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Inställningar', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Kort', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowEvent: { id: 'ShowEvent', value: 'Visa händelse', comment: 'Show an event (in a calendar)' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Visa filterrad', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Visa mindre', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Visa mer', comment: 'Show more form content' },
    SohoDarkTheme: { id: 'SohoDarkTheme', value: 'Soho mörkt', comment: 'The name of an application Theme' },
    SohoLightTheme: { id: 'SohoLightTheme', value: 'Soho ljust', comment: 'The name of an application Theme' },
    SohoHighContrastTheme: { id: 'SohoHighContrastTheme', value: 'Soho hög kontrast', comment: 'The name of an application Theme' },
    SickTime: { id: 'SickTime', value: 'Sjukfrånvaro', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Skiffer', comment: 'Color in our color palette' },
    SlideOf: { id: 'SlideOf', value: 'Bild {0} av {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Bild {0} och {1} av {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Handtag för', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Maximalt värde för handtag för', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Minimalt värde för handtag för', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Hoppa över till huvudinnehåll', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Status', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Börjar med', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} av {1} steg slutförda', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Genomstrykning', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Sortera stigande', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Sortera fallande', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Sortera nedåt', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Sortera uppåt', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Nedsänkt text', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Subtle: { id: 'Subtle', value: 'Diskret', comment: 'The title of one of the application themes.' },
    Superscript: { id: 'Superscript', value: 'Upphöjd text', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Flikar ...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Fäst', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Hög', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Mål', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Teamhändelse', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test Locale Defaults', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Textfärg', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Dra och släpp filer som ska överföras', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Dra och släpp eller <span class=”hyperlink”>markera filer</span> som ska överföras', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Avbryt överföring av denna fil', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Stäng detta fel', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Stäng detta fel', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Timer', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Till', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Idag', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Växla fetstil', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Växla rubrik 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Växla rubrik 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Växla kursivering', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Växla understrykning', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Verktygsfält', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Justera mot överkant', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Summa', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Summor', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Minimera träd', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Expandera träd', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turkos', comment: 'Color in our color palette' },
    TypeToFilter: { id: 'TypeToFilter', value: 'Filtertyp', comment: 'Screen reader hit for screen reader users.' },
    Up: { id: 'Up', value: 'Upp', comment: 'Up tooltip' },
    UpComing: { id: 'UpComing', value: 'Kommande', comment: 'List of upcoming things (general)' },
    UpComingEvents: { id: 'UpComingEvents', value: 'Kommande händelser', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Kommande ledighet', comment: 'As in time off work' },
    UpliftDarkTheme: { id: 'UpliftDarkTheme', value: 'Upphöjt mörkt', comment: 'The name of an application Theme' },
    UpliftHighContrastTheme: { id: 'UpliftHighContrastTheme', value: 'Upphöjt hög kontrast', comment: 'The name of an application Theme' },
    UpliftLightTheme: { id: 'UpliftLightTheme', value: 'Upphöjt ljust', comment: 'The name of an application Theme' },
    Upload: { id: 'Upload', value: 'Överför', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Ej tillgängligt datum', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Understrykning', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Ångra', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Upplåst', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Infoga/ta bort punktlista', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Innehållet är inte tillgängligt eftersom det använder funktioner som din webbläsare inte stödjer.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Webbadress', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Välj med piltangenterna.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Sök med Retur eller nedåtpilen.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Användare', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Användarprofil', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS-version', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Centrera vertikalt', comment: 'Vertical Align tooltip' },
    Vibrant: { id: 'Vibrant', value: 'Klara färger', comment: 'The title of one of the application themes.' },
    ViewSource: { id: 'ViewSource', value: 'Visa källa', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Visa visuell', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Vecka', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'År', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Ja', comment: 'On a dialog button' }
  }
});
