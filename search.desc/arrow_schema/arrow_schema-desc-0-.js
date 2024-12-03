searchState.loadedDescShard("arrow_schema", 0, "Arrow logical types\nError when an arithmetic operation overflows.\nMany different operations in the <code>arrow</code> crate return this …\nOpaque binary data of variable length.\nOpaque binary data of variable length.\nA boolean datatype representing the values <code>true</code> and <code>false</code>.\nError during import or export to/from the C Data Interface\nError during casting from one type to another.\nError during computation.\nError during CSV-related operations.\nThe maximum precision for DataType::Decimal128 values\nThe maximum scale for DataType::Decimal128 values\nThe maximum precision for DataType::Decimal256 values\nThe maximum scale for DataType::Decimal256 values\nThe default scale for DataType::Decimal128 and …\nDatatypes supported by this implementation of Apache Arrow.\nA signed 32-bit date representing the elapsed time since …\nA signed 64-bit date representing the elapsed time since …\nIndicates the number of elapsed days and milliseconds, …\nExact 128-bit width decimal value with precision and scale\nExact 256-bit width decimal value with precision and scale\nDense union layout\nA dictionary encoded array (<code>key_type</code>, <code>value_type</code>), where …\nError when a dictionary key is bigger than the key type\nError during division by zero.\nMeasure of elapsed time in either seconds, milliseconds, …\nWraps an external error.\nDescribes a single column in a <code>Schema</code>.\nA reference counted <code>Field</code>\nA cheaply cloneable, owned slice of <code>FieldRef</code>\nOpaque binary data of fixed size. Enum parameter specifies …\nA list of some logical data type with fixed length.\nA 16-bit floating point number.\nA 32-bit floating point number.\nA 64-bit floating point number.\nA signed 16-bit integer.\nA signed 32-bit integer.\nA signed 64-bit integer.\nA signed 8-bit integer.\nA “calendar” interval which models types that don’t …\nYEAR_MONTH, DAY_TIME, MONTH_DAY_NANO interval in SQL style.\nError indicating that an unexpected or bad argument was …\nError during IO operations.\nError during IPC operations in <code>arrow-ipc</code> or <code>arrow-flight</code>.\nError during JSON-related operations.\nOpaque binary data of variable length and 64-bit offsets.\nA list of some logical data type with variable length and …\n(NOT YET FULLY SUPPORTED)  A list of some logical data …\nA variable-length string in Unicode with UFT-8 encoding …\nA list of some logical data type with variable length.\n(NOT YET FULLY SUPPORTED)  A list of some logical data …\nA Map is a logical nested type that is represented as\nMemory or buffer error.\nTime in microseconds.\nTime in milliseconds.\nA triple of the number of elapsed months, days, and …\nTime in nanoseconds.\nReturned when functionality is not yet available.\nNull type\nError during Parquet operations.\nError during parsing from a string.\nA run-end encoding (REE) is a variation of run-length …\nError when the run end index in a REE array is bigger than …\nDescribes the meta-data of an ordered sequence of relative …\nA builder to facilitate building a <code>Schema</code> from iteratively …\nError during schema-related operations.\nA reference-counted reference to a <code>Schema</code>.\nTime in seconds.\nOptions that define the sort order of a given column\nSparse union layout\nA nested datatype that contains a number of sub-fields.\nA signed 32-bit time representing the elapsed time since …\nA signed 64-bit time representing the elapsed time since …\nAn absolute length of time in seconds, milliseconds, …\nA timestamp with an optional timezone.\nAn unsigned 16-bit integer.\nAn unsigned 32-bit integer.\nAn unsigned 64-bit integer.\nAn unsigned 8-bit integer.\nA nested datatype that can represent slots of differing …\nA cheaply cloneable, owned collection of <code>FieldRef</code> and …\nSparse or Dense union layouts\nA variable-length string in Unicode with UTF-8 encoding.\nA variable-length string in Unicode with UTF-8 encoding\nIndicates the number of elapsed whole months, stored as …\nSet this sort options to sort in ascending order\nSet this sort options to sort in descending order\nWhether to sort in descending order\nDefines <code>ArrowError</code> for representing failures in various …\nContains declarations to bind to the C Data Interface.\nA sequence of fields that describe the schema.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA map of key-value pairs containing additional custom meta …\nA map of key-value pairs containing additional meta data.\nCreate a new <code>SortOptions</code> struct\nSet this sort options to sort nulls first\nWhether to sort nulls first\nSet this sort options to sort nulls last\nSet this sort options to sort descending if argument is …\nSet this sort options to sort nulls first if argument is …\nOpaque binary data of variable length.\nOpaque binary data of variable length.\nA boolean datatype representing the values <code>true</code> and <code>false</code>.\nThe maximum precision for DataType::Decimal128 values\nThe maximum scale for DataType::Decimal128 values\nThe maximum precision for DataType::Decimal256 values\nThe maximum scale for DataType::Decimal256 values\nThe default scale for DataType::Decimal128 and …\nDatatypes supported by this implementation of Apache Arrow.\nA signed 32-bit date representing the elapsed time since …\nA signed 64-bit date representing the elapsed time since …\nIndicates the number of elapsed days and milliseconds, …\nExact 128-bit width decimal value with precision and scale\nExact 256-bit width decimal value with precision and scale\nDense union layout\nA dictionary encoded array (<code>key_type</code>, <code>value_type</code>), where …\nMeasure of elapsed time in either seconds, milliseconds, …\nOpaque binary data of fixed size. Enum parameter specifies …\nA list of some logical data type with fixed length.\nA 16-bit floating point number.\nA 32-bit floating point number.\nA 64-bit floating point number.\nA signed 16-bit integer.\nA signed 32-bit integer.\nA signed 64-bit integer.\nA signed 8-bit integer.\nA “calendar” interval which models types that don’t …\nYEAR_MONTH, DAY_TIME, MONTH_DAY_NANO interval in SQL style.\nOpaque binary data of variable length and 64-bit offsets.\nA list of some logical data type with variable length and …\n(NOT YET FULLY SUPPORTED)  A list of some logical data …\nA variable-length string in Unicode with UFT-8 encoding …\nA list of some logical data type with variable length.\n(NOT YET FULLY SUPPORTED)  A list of some logical data …\nA Map is a logical nested type that is represented as\nTime in microseconds.\nTime in milliseconds.\nA triple of the number of elapsed months, days, and …\nTime in nanoseconds.\nNull type\nA run-end encoding (REE) is a variation of run-length …\nTime in seconds.\nSparse union layout\nA nested datatype that contains a number of sub-fields.\nA signed 32-bit time representing the elapsed time since …\nA signed 64-bit time representing the elapsed time since …\nAn absolute length of time in seconds, milliseconds, …\nA timestamp with an optional timezone.\nAn unsigned 16-bit integer.\nAn unsigned 32-bit integer.\nAn unsigned 64-bit integer.\nAn unsigned 8-bit integer.\nA nested datatype that can represent slots of differing …\nSparse or Dense union layouts\nA variable-length string in Unicode with UTF-8 encoding.\nA variable-length string in Unicode with UTF-8 encoding\nIndicates the number of elapsed whole months, stored as …\nCheck to see if <code>self</code> is a superset of <code>other</code>\nCompares the datatype with another, ignoring nested field …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if this type is valid as a dictionary key\nReturns true if this type is floating: (Float*).\nReturns true if this type is integer: (Int*, UInt*).\nReturns true if this type is nested (List, FixedSizeList, …\nReturns true if this type is DataType::Null.\nReturns true if this type is numeric: (UInt*, Int*, Float*…\nReturns true if the type is primitive: (numeric, temporal).\nReturns true if this type is valid for run-ends array in …\nReturns true if this type is signed integer: (Int*).\nReturns true if this type is temporal: (Date*, Time*, …\nReturns true if this type is unsigned integer: (UInt*).\nCreate a <code>DataType::FixedSizeList</code> with elements of the …\nCreate a <code>DataType::LargeList</code> with elements of the …\nCreate a <code>DataType::List</code> with elements of the specified type\nReturns the byte width of this type if it is a primitive …\nReturn size of this instance in bytes.\nSee CDataInterface docs\nContains the error value\nContains the success value\nImplementation of <code>parse_data_type</code>, modeled after …\nGrammar is\nSplits a strings like Dictionary(Int32, Int64) into tokens …\nconsume the next token, returning OK(()) if it matches …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nreturns true if this character is a separator\nreturns the next char, and consuming it\nreturn the next token, or an error if there are none left\nParses the next Decimal128 (called after <code>Decimal128</code> has …\nParses the next Decimal256 (called after <code>Decimal256</code> has …\nParses the next Dictionary (called after <code>Dictionary</code> has …\nParses the next double quoted string\nParses the next Duration (called after <code>Duration</code> has been …\nParses the next FixedSizeBinary (called after …\nParses the FixedSizeList type\nParses the next i32 integer value\nParses the next integer value\nParses the next i8 integer value\nParses the next Interval (called after <code>Interval</code> has been …\nParses the LargeList type\nParses the List type\nparses the next full DataType\nParses the next Time32 (called after <code>Time32</code> has been …\nParses the next Time64 (called after <code>Time64</code> has been …\nParses the next timeunit\nParses the next timestamp (called after <code>Timestamp</code> has been …\nParses the next timezone\nParses the next u8 integer value\nparse the characters in val starting at pos, until the next\nreturns the next char, without consuming it\nError when an arithmetic operation overflows.\nMany different operations in the <code>arrow</code> crate return this …\nError during import or export to/from the C Data Interface\nError during casting from one type to another.\nError during computation.\nError during CSV-related operations.\nError when a dictionary key is bigger than the key type\nError during division by zero.\nWraps an external error.\nError indicating that an unexpected or bad argument was …\nError during IO operations.\nError during IPC operations in <code>arrow-ipc</code> or <code>arrow-flight</code>.\nError during JSON-related operations.\nMemory or buffer error.\nReturned when functionality is not yet available.\nError during Parquet operations.\nError during parsing from a string.\nError when the run end index in a REE array is bigger than …\nError during schema-related operations.\nReturns the argument unchanged.\nWraps an external error in an <code>ArrowError</code>.\nCalls <code>U::from(self)</code>.\nIndicates that the dictionary is ordered\nABI-compatible struct for <code>ArrowSchema</code> from C Data Interface\nFlags for <code>FFI_ArrowSchema</code>\nIndicates that the map keys are sorted\nIndicates that the field is nullable\nGet a flags value with all known bits set.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nReturns the child of this schema at <code>index</code>.\nReturns an iterator to the schema’s children.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nReturns the reference to the underlying dictionary of the …\nFor dictionary-encoded types, returns whether the ordering …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nCreate an empty <code>FFI_ArrowSchema</code>\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the flags of this schema.\nRefer to Arrow Flags\nReturns the format of this schema.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nTakes ownership of the pointed to <code>FFI_ArrowSchema</code>\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nFor map types, returns whether the keys within each map …\nReturns the metadata in the schema as <code>Key-Value</code> pairs\nReturns the name of this schema.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nReturns if the field is semantically nullable, regardless …\nThe intersection of a source flags value with the …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nSee CDataInterface docs\ncreate a new <code>FFI_ArrowSchema</code>. This fails if the fields’ …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nSet the flags of the schema\nAdd metadata to the schema\nSet the name of the schema\nDescribes a single column in a <code>Schema</code>.\nA reference counted <code>Field</code>\nDefault list member field name\nCheck to see if <code>self</code> is a superset of <code>other</code> field. …\nReturns an immutable reference to the <code>Field</code>’s  <code>DataType</code>.\nReturns the dictionary ID, if this is a dictionary type.\nReturns whether this <code>Field</code>’s dictionary is ordered, if …\nReturns a (flattened) <code>Vec</code> containing all child <code>Field</code>s …\nReturns a vector containing all (potentially nested) <code>Field</code> …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nIndicates whether this <code>Field</code> supports null values.\nReturns the immutable reference to the <code>Field</code>’s optional …\nA map of key-value pairs containing additional custom meta …\nReturns an immutable reference to the <code>Field</code>’s name.\nCreates a new field with the given name, type, and …\nCreates a new field that has additional dictionary …\nCreate a new <code>Field</code> with <code>DataType::Dictionary</code>\nCreate a new <code>Field</code> with <code>DataType::FixedSizeList</code>\nCreate a new <code>Field</code> with <code>DataType::LargeList</code>\nCreate a new <code>Field</code> with <code>DataType::List</code>\nCreates a new <code>Field</code> suitable for <code>DataType::List</code> and …\nCreate a new <code>Field</code> with <code>DataType::Map</code>\nCreate a new <code>Field</code> with <code>DataType::Struct</code>\nCreate a new <code>Field</code> with <code>DataType::Union</code>\nSets the <code>Field</code>’s optional custom metadata.\nReturn size of this instance in bytes.\nMerge this field into self if it is compatible.\nSet <code>DataType</code> of the <code>Field</code> and returns self.\nSets the metadata of this <code>Field</code> to be <code>metadata</code> and returns …\nSet the name of the <code>Field</code> and returns self.\nSet <code>nullable</code> of the <code>Field</code> and returns self.\nA cheaply cloneable, owned slice of <code>FieldRef</code>\nA cheaply cloneable, owned collection of <code>FieldRef</code> and …\nCheck to see if <code>self</code> is a superset of <code>other</code>\nReturns a new empty <code>Fields</code>\nCreate a new <code>UnionFields</code> with no fields\nReturns a copy of this <code>Fields</code> containing only those …\nSearches for a field by name, returning it along with its …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this is empty\nReturns an iterator over the fields and type ids in this …\nReturns the number of fields in this <code>UnionFields</code>\nCreate a new <code>UnionFields</code> from a <code>Fields</code> and array of …\nReturn size of this instance in bytes.\nReturn size of this instance in bytes.\nReturns a copy of this <code>Fields</code> containing only those …\nMerge this field into self if it is compatible.\nDescribes the meta-data of an ordered sequence of relative …\nA builder to facilitate building a <code>Schema</code> from iteratively …\nA reference-counted reference to a <code>Schema</code>.\nReturns a vector with references to all fields (including …\nLook up a column by name and return a immutable reference …\nCheck to see if <code>self</code> is a superset of <code>other</code> schema.\nCreates an empty <code>Schema</code>\nReturns an immutable reference to the <code>FieldRef</code> at index <code>idx</code>\nReturns an immutable reference of a specific <code>Field</code> …\nReturns a mutable reference to the <code>FieldRef</code> at index <code>idx</code>\nReturns an immutable reference of a specific <code>Field</code> …\nReturns an immutable reference of the vector of <code>Field</code> …\nA sequence of fields that describe the schema.\nReturns a vector of immutable references to all <code>Field</code> …\nConsume this <code>SchemaBuilder</code> yielding the final <code>Schema</code>\nReturns a vector with references to all fields (including …\nReturns the argument unchanged.\nReturns the argument unchanged.\nFind the index of the column with the given name.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an immutable reference to the Map of custom …\nReturns an immutable reference to the Map of custom …\nA map of key-value pairs containing additional meta data.\nReturns a mutable reference to the Map of custom metadata …\nCreates a new empty <code>SchemaBuilder</code>\nCreates a new <code>Schema</code> from a sequence of <code>Field</code> values.\nCreates a new <code>Schema</code> from a sequence of <code>Field</code> values and …\nReturns a new schema with only the specified columns in …\nAppends a <code>FieldRef</code> to this <code>SchemaBuilder</code> without checking …\nRemoves and returns the <code>FieldRef</code> as index <code>idx</code>\nReverse the fileds\nAppends a <code>FieldRef</code> to this <code>SchemaBuilder</code> checking for …\nMerge schema into self if it is compatible. Struct fields …\nCreates a new empty <code>SchemaBuilder</code> with space for <code>capacity</code> …\nSets the metadata of this <code>Schema</code> to be <code>metadata</code> and …")