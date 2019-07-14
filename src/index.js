'use strict'

import fetch from 'node-fetch'
import extend from 'xtend'
import queryString from 'query-string'

class CRP {
    constructor(key) {
        this.apikey = key
        this.output = 'json'
        this.baseURL = `https://www.opensecrets.org/api/`
        this._setup()
    }

    _setup() {
        if (this.apikey === undefined)
            throw new Error(
                'API Key not provided. Please acquire a key from The Center for Responsive Politics : https://www.opensecrets.org/open-data/api'
            )
    }

    _handleError(e) {
        return 'ERROR:', e
    }

    _get(method, args = {}) {
        const params = extend(
            { method, apikey: this.apikey, output: this.output },
            args
        )
        const url = `${this.baseURL}?${queryString.stringify(params)}`

        return fetch(url)
            .then(res => {
                if (res.status === 400) return Promise.reject(res.statusText)
                if (res.status === 200) return res.json()
            })
            .then(json => json.response)
            .catch(e => this._handleError(e))
    }

    getLegislators(id) {
        return this._get('getLegislators', { id })
    }

    memPFDprofile(cid, year) {
        return this._get('memPFDprofile', { cid, year })
    }

    candSummary(cid, cycle) {
        return this._get('candSummary', { cid, cycle }).then(
            d => d['@attributes']
        )
    }

    candContrib(cid, cycle) {
        return this._get('candContrib', { cid, cycle })
    }

    candIndustry(cid, cycle) {
        return this._get('candIndustry', { cid, cycle })
    }

    candIndByInd(cid, ind, cycle) {
        return this._get('candIndByInd', { cid, ind, cycle }).then(
            d => d['@attributes']
        )
    }

    candSector(cid, cycle) {
        return this._get('candSector', { cid, cycle })
    }

    congCmteIndus(cmte, indus, congno) {
        return this._get('congCmteIndus', { cmte, indus, congno })
    }

    getOrgs(org) {
        return this._get('getOrgs', { org })
    }

    orgSummary(id) {
        return this._get('orgSummary', { id })
    }

    independentExpend() {
        return this._get('independentExpend')
    }
}

module.exports = CRP
