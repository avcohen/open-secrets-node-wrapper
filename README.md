# open-secrets-node-wrapper

A node.js wrapper for [The Center for Responsive Politics API](https://www.opensecrets.org/open-data/api)

# Installation

```shell
$ npm install open-secrets-node
```

**Note:** add `--save` if you're using npm < 5.0.0

# Usage

ES6+

```js
import OpenSecretsAPI from 'open-secrets-node'
const API = new OpenSecretsAPI(process.env.API_KEY)
```

ES5 / Node.js

```js
var OpenSecretsAPI = require('open-secrets-node')
var API = new OpenSecretsAPI(process.env.API_KEY)
```

# Available Methods

| Members              | Parameters                                                                                                          | Description                                                                                                                      | Doc Link                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `API.getLegislators` | **`id`**: **(required)** two character state code or specific CID                                                   | provides a list of current Congress legislators and associated attributes for specified subset (state, district or specific CID) | [Link](https://www.opensecrets.org/api/?method=getLegislators&output=doc) |
| `API.memPFDprofile`  | **`cid`**: **(required)** CRP CandidateID <br/> **`year`**: 2013, 2014, 2015 and 2016 data provided where available | Summary profile from a members personal financial disclosure statement                                                           | [Link](https://www.opensecrets.org/api/?method=memPFDprofile&output=doc)  |

| Candidates (House or Senate) | Parameters                                                                                                                                                                                                             | Description                                                                 | Doc Link                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `API.candSummary`            | **`cid`**: **(required)** CRP CandidateID <br/> **`cycle`**: (optional) 2012, 2014, 2016, 2018; leave blank for latest cycle                                                                                           | Returns summary contribution information on a candidate for indicated cycle | [Link](https://www.opensecrets.org/api/?method=candSummary&output=doc)  |
| `API.candContrib`            | **`cid`**: **(required)** CRP CandidateID <br/> **`cycle`**: (optional) 2012, 2014, 2016, 2018 (blank or out of range cycle will return most recent cycle)                                                             | Returns the top contributors to a candidate/member for indicated period     | [Link](https://www.opensecrets.org/api/?method=candContrib&output=doc)  |
| `API.candIndustry`           | **`cid`**: **(required)** CRP CandidateID <br/> **`cycle`**: (optional) 2012, 2014, 2016, 2018 (blank or out of range cycle will return most recent cycle)                                                             | Returns the top industries to a candidate/member for indicated period       | [Link](https://www.opensecrets.org/api/?method=candIndustry&output=doc) |
| `API.candIndByInd`           | **`cid`**: **(required)** CRP CandidateID <br/> **`ind`**: **(required)** a 3-character industry code <br/> **`cycle`**: (optional) 2012, 2014, 2016, 2018 (blank or out of range cycle will return most recent cycle) | Returns data from a specified industry to a specified candidate             | [Link](https://www.opensecrets.org/api/?method=candIndByInd&output=doc) |
| `API.candSector`             | **`cid`**: **(required)** CRP CandidateID <br/> **`cycle`**: (optional) 2012, 2014, 2016; leave blank for latest cycle                                                                                                 | Returns the top sectors to a candidate/member for indicated period          | [Link](https://www.opensecrets.org/api/?method=candSector&output=doc)   |

| Congressional Committees | Parameters                                                                                                                                                                                                                                                     | Description                                                                                       | Doc Link                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `API.congCmteIndus`      | **`cmte`**: **(required)** Committee ID in CQ format <br/> **`indus`**: **(required)** Industry code <br/> **`congno`**: (optional) 112 (uses 2012 data), 113 (uses 2014 data), 114 (uses 2016 data), or 115 (uses 2018 data); leave blank for latest congress | Provides total raised by each member of specified congressional committee from specified industry | [Link](https://www.opensecrets.org/api/?method=congCmteIndus&output=doc) |

| Organizations    | Parameters                                                               | Description                                                                | Doc Link                                                              |
| ---------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `API.getOrgs`    | **`org`**: **(required)** name or partial name of organization requested | Look up an organization by name (last updated: 06/10/19)                   | [Link](https://www.opensecrets.org/api/?method=getOrgs&output=doc)    |
| `API.orgSummary` | **`id`**: **(required)** CRP orgid (available via `getOrgs` method)      | Provides summary fundraising information for the specified organization id | [Link](https://www.opensecrets.org/api/?method=orgSummary&output=doc) |

| Independent Expenditures | Parameters | Description                                                                                | Doc Link                                                                     |
| ------------------------ | ---------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `API.independentExpend`  | `none`     | Access the latest 50 independent expenditure transactions reported. Updated 4 times a day. | [Link](https://www.opensecrets.org/api/?method=independentExpend&output=doc) |
