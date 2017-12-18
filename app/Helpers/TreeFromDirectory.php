<?php
/**
 * Copyright (c) 2017. Code walk giapdien1804@gmail.com | +841648392803
 */

/**
 * Created by PhpStorm.
 * User: traih
 * Date: 13/8/2017
 * Time: 9:37 AM
 */

namespace App\Helpers;

/*
* $tree = new JsTree($nodes, $base);
* $tree->folderIconClass = 'fa fa-folder';
* $tree->fileIconClass = 'fa fa-file';
* $tree->setExcludedExtensions(['DS_Store', 'gitignore']);
* $tree->setExcludedPaths(['Laravel-wallpapers/1280x1024', 'laravel_dark', 'Laravel-wallpapers/.git']);
* $tree->setDisabledFolders(['Laravel-wallpapers']);
* $tree->setDisabledExtensions(['md', 'png', 'jpg']);
* $tree->setOpenedFolders(['Laravel-wallpapers', 'Laravel-wallpapers/1280x800']);
* $tree->setLiFolderAttributes(['class' => 'li-folder-blah']);
* $tree->setAFileAttributes(['class' => 'a-file-blah']);
* $tree->setAFolderAttributes(['class' => 'a-folder-blah']);
* return $tree->build();
*
*/

class TreeFromDirectory
{
    /**
     * @var array
     */
    protected $dir;

    /**
     * @var array
     */
    protected $excludedExtensions = [];

    /**
     * @var array
     */
    protected $excludedPaths = [];

    /**
     * @var array
     */
    protected $disabledExtensions = [];

    /**
     * @var array
     */
    protected $disabledFolders = [];

    /**
     * @var array
     */
    protected $openedFolders = [];

    /**
     * @var array
     */
    protected $liFolderAttributes = [];

    /**
     * @var array
     */
    protected $aFileAttributes = [];

    /**
     * @var array
     */
    protected $aFolderAttributes = [];

    /**
     * @var string
     */
    public $fileIconClass;

    /**
     * @var string
     */
    public $folderIconClass;

    /**
     * JsTree constructor.
     * @param $dir
     * @param $base
     */
    public function __construct($dir, $base)
    {
        $this->dir = $dir;
        $this->base = $base;
    }

    /**
     * Just a little helper for the setters.
     *
     * @param $array
     * @param $message
     * @throws \Exception
     */
    private function isArray($array, $message)
    {
        if (!is_array($array)) {
            throw new \Exception($message);
        }
    }

    /**
     * Array of extension without the period you wou like excluded
     *
     * @param array $excludedExtensions
     */
    public function setExcludedExtensions($excludedExtensions)
    {
        $this->isArray($excludedExtensions, 'Exclude extensions must be an array');

        $this->excludedExtensions = $excludedExtensions;
    }

    /**
     * Paths array for exclusion will match partials or children
     *
     * @param array $excludedPaths
     */
    public function setExcludedPaths($excludedPaths)
    {
        $this->isArray($excludedPaths, 'Excluded paths must be an array.');

        $this->excludedPaths = $excludedPaths;
    }

    /**
     * Array for extensions you want disabled
     *
     * @param array $disabledExtensions
     */
    public function setDisabledExtensions($disabledExtensions)
    {
        $this->isArray($disabledExtensions, 'Disabled extensions must be an array');

        $this->disabledExtensions = $disabledExtensions;
    }

    /**
     * An array of folders disabled (expects exact match)
     *
     * @param array $disabledFolders
     */
    public function setDisabledFolders($disabledFolders)
    {
        $this->isArray($disabledFolders, 'Disabled folders must be an array');

        $this->disabledFolders = $disabledFolders;
    }

    /**
     * An array of folders you want opened on load (expects exact match)
     *
     * @param array $openedFolders
     */
    public function setOpenedFolders($openedFolders)
    {
        $this->isArray($openedFolders, 'Open folders must be an array.');

        $this->openedFolders = $openedFolders;
    }

    /**
     * Array of attributes you want to attach to list element for folders.
     *
     * @param array $liFolderAttributes
     */
    public function setLiFolderAttributes($liFolderAttributes)
    {
        $this->isArray($liFolderAttributes, '<li> folder attributes must be an array.');

        $this->liFolderAttributes = $liFolderAttributes;
    }

    /**
     * Array of attributes you want to attach to link element for files.
     *
     * @param array $aFileAttributes
     */
    public function setAFileAttributes($aFileAttributes)
    {
        $this->isArray($aFileAttributes, '<a> file attributes must be an array.');

        $this->aFileAttributes = $aFileAttributes;
    }

    /**
     * Array of attributes you want to attach to link element for folders.
     *
     * @param array $aFolderAttributes
     */
    public function setAFolderAttributes($aFolderAttributes)
    {
        $this->isArray($aFolderAttributes, '<a> folder attributes must be an array.');

        $this->aFolderAttributes = $aFolderAttributes;
    }

    /**
     * Converts the raw array to a collection and filters based on set variable arrays.
     *
     * @param $elements
     * @return \Illuminate\Support\Collection
     */
    protected function filterExcludes($elements)
    {
        $nodes = collect($elements)->filter(function ($element) {

            $ext = pathinfo($element, PATHINFO_EXTENSION);

            return !collect($this->excludedExtensions)->contains($ext);

        })->filter(function ($node) {

            return !collect($this->excludedPaths)->contains(function ($key, $value) use ($node) {

                if (strpos($node, $value) !== false) {
                    return true;
                }

            });

        });

        return $nodes;
    }

    /**
     * Returns disabled : true
     *
     * @param $node
     * @param string $type
     * @return bool
     */
    protected function filterDisabled($node, $type = 'folder')
    {
        if ($type == 'folder') {
            return collect($this->disabledFolders)->contains($node);
        }

        $ext = pathinfo($node, PATHINFO_EXTENSION);

        return collect($this->disabledExtensions)->contains($ext);
    }

    /**
     * Returns opened : true for folders
     *
     * @param $node
     * @return bool
     */
    protected function filterOpened($node)
    {
        return collect($this->openedFolders)->contains($node);
    }

    /**
     * Sets the attributes for desired node_type based on variable arrays.
     *
     * @param string $node_type
     * @param $attr_type
     * @return array
     */
    protected function filterAttributes($node_type = 'folder', $attr_type)
    {
        switch ($node_type) {
            case 'folder':

                if ($attr_type == 'a') {
                    return $this->liFolderAttributes;
                }

                return $this->aFolderAttributes;

                break;

            default:

                return $this->aFileAttributes;

                break;
        }
    }

    /**
     * Builds based on input and options set.
     * ->sort() could be removed if you like
     * Returns array.
     *
     * @return string
     */
    public function build()
    {
        $elements = $this->dir;

        $filters = $this->filterExcludes($elements);

        $nodes = collect($filters)->map(function ($node) {
            $file = (pathinfo($node, PATHINFO_EXTENSION) ? true : false);

            return [
                'id' => $node,
                'parent' => ($this->base == dirname($node) ? '#' : dirname($node)),
                'text' => basename($node),
                'icon' => ($file ? $this->fileIconClass : $this->folderIconClass),
                'state' => [
                    'disabled' => ($file ? $this->filterDisabled($node, 'file') : $this->filterDisabled($node)),
                    'opened' => ($file ? false : $this->filterOpened($node)),
                ],
                'children' => ($file ? false : true),
                'li_attr' => $this->filterAttributes('folder', 'li'),
                'a_attr' => ($file ? $this->filterAttributes('file', 'a') : $this->filterAttributes('folder', 'a')),
            ];
        })
            ->sort();


        return $nodes->values()->toArray();
    }
}