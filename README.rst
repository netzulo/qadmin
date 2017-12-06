QA Admin
========

.. image:: https://img.shields.io/github/downloads/netzulo/qadmin/total.svg
  :alt: Downloads on Github
  :target: https://img.shields.io/github/downloads/netzulo/qadmin/total.svg
.. image:: https://img.shields.io/github/release/netzulo/qadmin.svg
  :alt: GitHub release
  :target: https://img.shields.io/github/release/netzulo/qadmin.svg

+-----------------------+-------------------------------------------------------------------+------------------------------------------------------------------------------------------------+
| Branch                | Linux Deploy                                                      | Windows Deploy                                                                                 |
+=======================+===================================================================+================================================================================================+
|  master               | .. image:: https://travis-ci.org/netzulo/qadmin.svg?branch=master | .. image:: https://ci.appveyor.com/api/projects/status/qrb3o3qdeg3qv9eq/branch/master?svg=true |
+-----------------------+-----------------------+-------------------------------------------+------------------------------------------------------------------------------------------------+


NodeJs tested versions
----------------------

- iojs
- lts/*
- 7
- 6
- 5 _(not supported)_
- 4 _(not supported)_

Code Metrics by sonarqube
----------------------------

.. image:: http://qalab.tk:82/api/badges/gate?key=qadmin
  :alt: Quality Gate
  :target: http://qalab.tk:82/api/badges/gate?key=qadmin
.. image:: http://qalab.tk:82/api/badges/measure?key=qadmin&metric=lines
  :alt: Lines
  :target: http://qalab.tk:82/api/badges/gate?key=qadmin
.. image:: http://qalab.tk:82/api/badges/measure?key=qadmin&metric=bugs
  :alt: Bugs
  :target: http://qalab.tk:82/api/badges/gate?key=qadmin
.. image:: http://qalab.tk:82/api/badges/measure?key=qadmin&metric=vulnerabilities
  :alt: Vulnerabilities
  :target: http://qalab.tk:82/api/badges/gate?key=qadmin
.. image:: http://qalab.tk:82/api/badges/measure?key=qadmin&metric=code_smells
  :alt: Code Smells
  :target: http://qalab.tk:82/api/badges/gate?key=qadmin
.. image:: http://qalab.tk:82/api/badges/measure?key=qadmin&metric=sqale_debt_ratio
  :alt: Debt ratio
  :target: http://qalab.tk:82/api/badges/gate?key=qadmin
.. image:: http://qalab.tk:82/api/badges/measure?key=qadmin&metric=comment_lines_density
  :alt: Comments
  :target: http://qalab.tk:82/api/badges/gate?key=qadmin


NPM install
-----------

*Not uploaded to npm, just clone it*

``git clone https://github.com/netzulo/qadmin``
``cd qadmin``
``npm install``


Compile website
***************

*This command will result on new folder ./dist with website can be copied to apache or nginx web server*

``npm run build``

Test
****

* Unitaries : ``npm test``
* Functionals : ``npm run e2e``
